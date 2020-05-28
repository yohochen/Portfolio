import React from 'react';
import ProjectItem from './ProjectItem';
import ApiHelper from './ApiHelper';

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
        fetch(api_url)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                projects: result.filter(project => preset.includes(project.name)),
                isLoaded: true
              });
            },
            // Note: important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render(){
        const {projects, isLoaded, error} = this.state

        if (error){
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div></div>; // loading
        } else {
            return(
                <section className="section-projects">
                    <div className="row">
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
    'Vision-Shopping': 'E-commerce site to commodity product by photo. Uses IBM Wastson Visual recoginition',
    'Foodpertino': 'Simple html5/css3 frontend project',
    'Portfolio': 'Personal portfolio',
    'Stock-platform': 'Informative Stock Platform built with React/Nodejs'}

export default Project;
