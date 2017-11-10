import  React from 'react'

class Edit extends  React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    change(e){
        this.props.changeInp(e.target.value)
    }

    render() {
        const val = this.props.newVal;
        return(
            <div>
                <input type="text" onChange={(e) => this.change(e)}  />
            </div>
        )
    }

}

export default Edit


