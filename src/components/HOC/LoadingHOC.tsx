import * as React from 'react'

// Generics:
// 1. A HOC requires that a component be passed in as an argument. And so we need to explicity state what type that component is
// 2. The component provided as an argument (ie. WrappedComponent) will have a type of React.ComponentType
// 3. However, typescript wants us to be even more explicit in saying what the shape of the Props are for that wrapped component
// 4. Which is why we use generics to say that the wrapped component is of type React.Component with a Prop shape of 'P' which extends from object
// 5. Essentially, we can pass in any component that has any prop shape into here because we used generics and that generic extends from object
// 6. In our case. The component we passed in was of type React.Component<IUserTotalProps>, which matches with our generics because IUserTotalProps extends from object
// Note we use React.ComponentType because it encompasses stateful, and stateless components

// propName:
// In our HOC, we are returning a function that returns a function that returns a React class.
// (propName) => {
//      return (component) => {
//              return React.Component
//          }
//  }
// *note this works because of closures. Because we still have access to propName during the execution of the returned function (ie. when the render function is called)

const loadingHOC = (propName: string) => <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    return class LoadingHOCComponent extends React.Component<P> {
        public render() {
            return (
                // We need to pass along the props to WrappedComponent (ie. UserTotal) because <UserTotal total={...}/> in DashboardPage.tsx is actually evaluating/executing LoadingHOCComponent
                // which is why we have access to this.props['total'] here 
                !this.props[propName] ? <div>loading...</div> : <WrappedComponent {...this.props}/>
            );
        }
    }
}

export default loadingHOC

// HOC:
// <UserTotal total={this.state.user.total}/>
// UserTotal returns a React.Component because of LoadingHOC('total')(UserTotal) => React.Component
// React injects the props (provided in <UserTotal total={this.state.user.total}/>) into LoadingHOCComponent in 'this' (just like any normal component)

// THINK OF THIS AS ANY OTHER NORMAL REACT COMPONENT CLASS (this just has more steps into evaluating that class)
// This is an example of an enhancer