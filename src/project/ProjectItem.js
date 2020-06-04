import React from 'react';
import './Project.css'
import http_option_with_header from '../HttpOption.js'

export class ProjectItem extends React.Component {

    constructor(props) {
          super(props);
          this.state = {
            error: null,
            isLoaded: false,
            languages: null,
            languagesPercentage: '',
            display: true
          };
        }

    componentDidMount() {

        fetch(this.props.languagesURL, http_option_with_header)
          .then(res => {
              if(res.status == 401){
                throw new Error("Bad Credential when calling github api")
              }else{
               return res.json()}
           })
          .then(
            (result) => {
              this.setState({
                languages: result,
                isLoaded: true
              })
            },

            // Note: important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.

            // this "failure" callback in the promise is an invisible try/catch that
            // handle error, so that it does not get passed to catch

            // (error) => {
            //     console.log("calling error")
            //   this.setState({
            //     isLoaded: true,
            //     error
            //   });
            // }
        )
        .then(res => this.getLanguages(res))
        .catch((err) => {
            this.setState({
              display: false
            })
        })
    }

    getLanguages(languagesObj) {
        if(this.state.languages){

            const reducerSum = (sum, lang) =>  sum + lang
            const total = Object.values(this.state.languages).reduce(reducerSum, 0);

            const reducerSummary = (summary, lang) => {
                summary += '  ' + lang[0] + ': ' + (lang[1] / total * 100).toFixed(1) + '%'
                return summary
            }
            const detail = Object.entries(this.state.languages).reduce(reducerSummary, '');
            this.setState({languagesPercentage: detail})
        }
    }

    render() {
      const { projectName, description, repo } = this.props;
      return (
            <div className="project" onClick={() => window.open(repo)}>
                <h3>{projectName}</h3>
                <div className="divider"></div>
                {this.state.display &&
                    <React.Fragment>
                        <p>
                            {this.state.languagesPercentage}
                        </p>
                        <div className="divider"></div>
                    </React.Fragment>
                }
                <p>
                    {description}
                </p>

            </div>
          );
        }
      }

  export default ProjectItem
