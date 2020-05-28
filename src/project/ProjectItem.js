import React from 'react';

const langData = {
  "PHP": 93147,
  "JavaScript": 28448,
  "HTML": 27542,
  "CSS": 4871
}

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
        fetch(this.props.languagesURL)
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
                <div className="divided"></div>
                <p>
                    {this.state.languagesPercentage}
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
