import React from 'react';
import Header from './components/Header/Header';
import PageContainer from './components/PageContainer/PageContainer';
import './styles.scss';
import './media.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openNav: false
        }
    }

    toggleOpenHandler = e => {
        e.preventDefault();
        const { openNav } = this.state;
        this.setState({openNav: !openNav})
};

    render() {

        return (
            <>
                <Header toggleOpenHandler={this.toggleOpenHandler}/>
                <PageContainer openNav={this.state.openNav}/>
            </>
        );
    }
}

export default App;
