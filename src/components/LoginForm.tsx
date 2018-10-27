import * as React from 'react';

interface ILoginFormProps {
    handleLogin: (username: string, password: string) => void
}

interface ILoginFormState {
    password: string,
    username: string;
}

class LoginForm extends React.Component<ILoginFormProps, ILoginFormState> {

  constructor(props: ILoginFormProps) {
    super(props);
    this.state = {
        password: "",
        username: ""
    }

    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleInputOnChange = this.handleInputOnChange.bind(this)
  }

  public handleLoginClick(e: React.MouseEvent) {
    e.preventDefault()
    console.log(this.state)
    this.props.handleLogin(this.state.username, this.state.password)
  }

  public handleInputOnChange(e: React.SyntheticEvent<HTMLInputElement>) {
    const field = e.currentTarget.id
    const value = e.currentTarget.value
    this.setState(prevState => {
        const newState = {...prevState}
        newState[field] = value
        return newState
    })
  }

  public render() {
    return (
      <div className="LoginForm">
        <form>
            <input id="username" type="text" placeholder="Username" onChange={this.handleInputOnChange}/>
            <input id="password" type="password" placeholder="Password" onChange={this.handleInputOnChange}/>
            <button type="submit" onClick={this.handleLoginClick}>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
