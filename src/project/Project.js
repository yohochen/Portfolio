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
          return <div>Loading...</div>;
        } else {
            return(
                <section className="section-projects">
                    <div className="row">
                      <h2>Projects</h2>
                    </div>

                    <div className="row">
                        <div className="projects-wrapper box">
                            {projects.map(
                                project => (

                                 <ProjectItem key={project.name} projectName={project.name} description={project.description} languagesURL={project.languages_url}/>
                                )
                            )}
                        </div>
                    </div>

                </section>
            )
        }
    }
}
export default Project;
