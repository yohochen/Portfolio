import React from 'react';
import ProjectItem from './ProjectItem';
import ApiHelper from './ApiHelper';
import './Project.css'
import BadCredError from './BadCredError.js'
import http_option_with_header from '../HttpOption.js'

export class Project extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
            error: null,
            isLoaded: false,
            projects: []
          };
        }

    componentDidMount() {
        let api_url = new ApiHelper('https://api.github.com/users/yohochen').append('/repos').param('type=all').getFinalURL()
        let preset = ['ParkingMaps', 'Skeye', 'Vision-Shopping', 'Foodpertino', 'Portfolio', 'Stock-platform']

        fetch(api_url, http_option_with_header)
          .then(res => {
            if(res.status === 200){
                return res.json()
            }else{
                throw new BadCredError('Failed to fetch Github API with given credential')
            }
          })
          .then(
            (result) => this.renderProjectItems(result, preset)
          )
          .catch((err) => {
              if(err instanceof BadCredError){
                  // fallback: re-call it without PAT
                  this.fetchWithoutPAT(api_url, preset)
              }
          })
      }

    fetchWithoutPAT(api_url, preset) {
      fetch(api_url)
        .then((res) => {
          if(res.status === 200){
              return res.json()
          }else{
              throw new Error("Calling Github API with no Cred also failed")
          }
        })
        .then(
          (result) => {
            this.renderProjectItems(result, preset)}
        )
        .catch((err) => {
            this.setState({
              isLoaded: true,
              error: 'Failed to fetch from Github API'
            });
        })
    }

    renderProjectItems(result, preset){
      this.setState({
        projects: result.filter(project => preset.includes(project.name)),
        isLoaded: true
      });
    }

    render(){
        const {projects, isLoaded, error} = this.state

        if (error){
            return (
                <section id="projects" className="section-projects">
                    <div className="row projectTitle">
                      <h2>Projects</h2>
                    </div>
                    <div className="row">
                        <div className='error'> Error: {error} :(</div>
                    </div>

                </section>
            )
        } else if (!isLoaded) {
          return <div></div>; // loading
        } else {
            return(
                <section id="projects" className="section-projects">
                    <div className="row projectTitle">
                      <h2>Projects</h2>
                    </div>

                    <div className="row">
                        <div className="projects-wrapper box">
                            {projects.map(
                                project => {

                                return (
                                 <ProjectItem
                                    key={project.name}
                                    projectName={project.name}
                                    repo={project.html_url}
                                    description={project.description !== null ? project.description : descriptionMap[project.name]}
                                    languagesURL={project.languages_url}/>
                              )}
                            )}
                        </div>
                    </div>

                </section>
            )
        }
    }
}

const descriptionMap = {
    'ParkingMaps': 'IOS project integrated with Firebase to display the nearby campus parking',
    'Skeye': 'Event management app that provides convenience to event host, third party, and visitor',
    'Vision-Shopping': 'E-commerce app to search similar commodity by photo. Uses IBM Wastson Visual recoginition',
    'Foodpertino': 'Simple html5/css3 frontend project',
    'Portfolio': 'Personal portfolio',
    'Stock-platform': 'Informative Stock Platform built with React/Nodejs'}

export default Project;
