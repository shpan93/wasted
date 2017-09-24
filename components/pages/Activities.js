import React from 'react';
import { connect } from 'react-redux';
import * as Ons from 'react-onsenui';
import { getCategoriesAndActivities, addActivity } from '../../redux/data/actions';
import Select from '../form/Select';
import '../../sass/components/activities-page.scss';

class Activities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: null,
      activityName: '',
      allVisible: false,
    };
  }

  componentDidMount() {
    this.props.getCategoriesAndActivities();
  }

  renderCategory(category, index) {
    return (
      <div className="category" key={index}>
        <div className="category-image" />
        <div className="category-name">{category.name}</div>
      </div>
    );
  }

  changeVisibility() {
    this.setState({ allVisible: !this.state.allVisible });
  }

  changeCategory(e) {
    this.setState({ category: e.target.value });
  }

  changeActivityName(e) {
    this.setState({ activityName: e.target.value });
  }

  addActivity() {
    this.props.addActivity({ categoryId: parseInt(this.state.category), name: this.state.activityName });
  }

  render() {
    return (
      <Ons.Page key="activities-page">
        <div className="activities-page">
          <div className="headline">
            Activities
          </div>
          <div className="subheadline">
            Categories
          </div>
          <div className="categories-wrapper">
            {
              (this.state.allVisible ? this.props.categories : this.props.categories.slice(0, 3))
                .map(this.renderCategory)
            }
          </div>
          {
            this.props.categories.length > 3 && (
              <div className="see-all" onClick={::this.changeVisibility}>
                {
                  this.state.allVisible ? 'See less' : 'See all'
                }
              </div>
            )
          }
          <div className="subheadline">
            Add new activity
          </div>
          <form className="activity-form">
            <Select
              options={this.props.categories}
              onChange={::this.changeCategory}
              placeholder="Select a category"
            />
            <div className="form-group">
              <input
                type="text"
                name="activityName"
                value={this.state.activityName}
                onChange={::this.changeActivityName}
                placeholder="Activity name"
              />
            </div>
            <div className="btn btn-submit" onClick={::this.addActivity}>Add activity</div>
          </form>
        </div>
      </Ons.Page>
    );
  }
}

export default connect((state) => {
  return {
    categories: state.data.categories,
  };
}, {
  getCategoriesAndActivities,
  addActivity,
})(Activities);