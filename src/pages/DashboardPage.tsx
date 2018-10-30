import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface IDashboardPageRouterProps {
    uid: string
}

interface IDashboardPageProps extends RouteComponentProps<IDashboardPageRouterProps>{

}

interface IDashboardPageState {
    user: {
        id: string
    }
}

class DashboardPage extends React.Component<IDashboardPageProps, IDashboardPageState> {

    public constructor(props: IDashboardPageProps) {
        super(props);
        this.state = {
            user: {
                id: ""
            }
        }
    }
    
    public componentDidMount() {
        document.title = "Dashboard"
        const {uid} = this.props.match.params
        console.log(uid)
        this.setState({
            user: {
                id: uid
            }
        })
    }

    public render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <div>Welcome {this.state.user.id}</div>
            </div>
        )
    }
}

export default DashboardPage