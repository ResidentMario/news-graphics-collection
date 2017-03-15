let React = require('react');
let ReactDOM = require('react-dom');

class Collection extends React.Component {
    constructor() {
        super();
        this.state = {
            filters: {
                news_organization: "The New York Times",
                category: "Sports",
                visual_form: null,
                participation: null,
                annotation: null,
                data_type: null,
                byline: null,
            },
            years: [2000, 2015],
            count: 0
        };
    }

    render() {
        return (
            <div className="collection">
                <FilterBar filters={this.state.filters}
                           years={this.state.years}
                           count={this.state.count} />
                <div className="content-frame">
                    <Menu years={this.state.years}/>
                </div>
            </div>
        );
    }
}

class FilterBar extends React.Component {
    render() {
        let filter_components = [];
        let filters = this.props.filters;
        Object.keys(filters).forEach(
            function(filter, i) {
                if (filters[filter]) {
                    filter_components.push(<FilterToggle key={i} filter={filter} filter_value={filters[filter]}/>)
            }
        });

        return (
            <div className="filterbar">
                <div className="filterbar-count"><b>{this.props.count}</b> graphics</div>
                <div className="filterbar-selected-tags">
                    <span className="active-filters-text">active filter(s): </span>
                    {filter_components}
                </div>
            </div>
        );
    }
}

class FilterToggle extends React.Component {
    render() {
        return (
            <span className="toggle-button hvr-fade">
                <span className="toggle-button-text">{this.props.filter_value}</span>
                <span className="toggle-button-x">X</span>
            </span>
        );
    }
}

class Menu extends React.Component {
    render() {
        return (
            <TimeSelector years={this.props.years}/>
        );
    }
}

class TimeSelector extends React.Component {
    render() {
        return (null)
    }
}

// ========================================

ReactDOM.render(
    <Collection />,
    document.getElementById('collection')
);
