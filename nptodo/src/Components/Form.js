import React from "react"
import { v4 } from "uuid"


export default class Form extends React.Component {

    state = {

        value: "",
        id: v4(),
        list: [],
    }

    ChangedValue(event) {

        this.setState({ value: event.target.value })

    }

    AddItem = () => {

        const NewItem = {
            id: v4(),
            NewItem: this.state.value
        }
        const newList = [...this.state.list]
        newList.push(NewItem)
        this.setState({ value: "", list: newList })

    }

    DeleateItem = (id) => {
        const list = [...this.state.list]
        const UpdatedList = list.filter(item => item.id !== id)
        this.setState({ list: UpdatedList })

    }

    liForUlElement = () => {
        console.log("function was called")
        const list = this.state.list
        const newItems = list.map(item => {
            return (
                <li key={item.id}> {item.NewItem}
                    <button onClick={this.DeleateItem}>
                        X </button>
                </li>
            )
        })
    }


    render() {
        return (
            <div className="Container" >

                <h1> To-DO list </h1>
                <input type="text" placeholder="Write Your Todos" onChange={evt => this.ChangedValue(evt)} />
                <button onClick={this.AddItem}
                > Add  </button>
                <br />
                <ul>{this.state.list.map(item => {
                    return (
                        <li key={item.id}> {item.NewItem}
                            <button onClick={this.DeleateItem}>
                                X </button>
                        </li>
                    )
                })} </ul>

            </div>
        )
    }
}
