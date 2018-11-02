import * as React from 'react'
import LoadingHOC from '../components/HOC/LoadingHOC';

interface IUserTotalProps  {
    total?: number
}

const UserTotal = (props: IUserTotalProps) => {
    return (
        <div>
            {props.total}
        </div>
    );
}

export default LoadingHOC('total')(UserTotal)