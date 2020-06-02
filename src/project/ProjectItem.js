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
            languagesPercentage: ''
          };
        }

    componentDidMount() {

        const header_github_pat = {
            'Authorization': 'token d38be962be8a4d2f1d30bc2f9e966a0cecbc1115'
        }
        const option = {
            headers: header_github_pat
        }

        fetch(this.props.languagesURL, http_option_with_header)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                languages: result,
                isLoaded: true
              })
            },

            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        ).then(res => {this.getLanguages(res)})
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
                <p>
                    {this.state.languagesPercentage}
                </p>
                <div className="divider"></div>
                <p>
                    {description}
                </p>

            </div>
          );
        }
      }

  export default ProjectItem
