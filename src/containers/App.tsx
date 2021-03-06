import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import ContainerTab from './ContainerTab';
import * as actions from '../actions';

class App extends React.PureComponent {
    constructor(props: any) {
        super(props);
        
        const { fetchItemsCall } = props;
        fetchItemsCall();
    }

    public render(): JSX.Element {
        return (
            <>
                <ContainerTab />
            </>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        fetchItemsCall: bindActionCreators(actions.fetchItemsCall, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(App);