import React from 'react';


export class ProjectItem extends React.Component {

    constructor(props) {
          super(props);
          this.state = {
            error: null,
            isLoaded: false,
            languages: null
          };
        }

    componentDidMount() {
        fetch(this.props.languagesURL)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                languages: result,
                isLoaded: true
              });
            },

            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }

    getLanguages(languages_url) {
        // const languages =
        //     fetch(languages_url)
        //     .then(res => res.json())
        //     .catch(function(error) {
        //         console.log('There has been a problem with languages detail fetch: ',
        //         error.message);
        //     });
        //
        // console.log("show:")
        // console.log(languages)
        const total = 0;
    }

    render() {
      const { projectName, description } = this.props; // ES6 destructuring

      return (
            <div className="project" >
                <h3>{projectName}</h3>
                <div className="divided"></div>
                <p>
                    {JSON.stringify(this.state.languages)}
                </p>
                <div className="divided"></div>
                <p>
                    {description}
                </p>

            </div>
      );
    }
  }

  export default ProjectItem
