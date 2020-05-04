import React, { Component } from 'react';

class Appointments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            appointments: [],
            isLoading: true,
            pageNum: 0,
            numItems: 0,
            numPages: 0
        };
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    componentDidMount() {
        this.fetchAppointments();
    }

    async fetchAppointments(page = 1) {

        await fetch('appointments?page=' + page)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    appointments: res[0].appointmentList,
                    isLoading: false,
                    pageNum: page,
                    numItems: res[0].numItems,
                    numPages: res[0].numPages,
                    pageSize: res[0].pageSize
                })
            });
    }

    previousPage() {
        this.fetchAppointments(this.state.pageNum - 1);
    }


    nextPage() {
        this.fetchAppointments(this.state.pageNum + 1);
    }

    renderAppointmentTable(appointments) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>date</th>
                    <th>time</th>
                    <th>resident</th>
                    <th>unit</th>
                    <th>number</th>
                    <th>type</th>
                    <th>contact</th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(appointment =>
                    <tr key={appointment.id}>
                        <td>{appointment.id}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.time}</td>
                        <td>{appointment.resident}</td>
                        <td>{appointment.unit}</td>
                        <td>{appointment.number}</td>
                        <td>{appointment.type}</td>
                        {this.renderContact(appointment.contact)}
                    </tr>
                )}
            </tbody>
        </table>;
    }

    renderContact(contacts) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>name</th>
                    <th>info</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(contact =>
                    <tr key={contacts.info}>
                        <td>{contact.name}</td>
                        <td>{contact.info}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>isloading</div>
            );
        }
        else {
            let content = this.renderAppointmentTable(this.state.appointments);
            let firstItem = this.state.pageSize * this.state.pageNum - (this.state.pageSize - 1);
            let lastItem = this.state.pageSize * this.state.pageNum;
            lastItem = lastItem > this.state.numItems ? this.state.numItems : lastItem;
            return (
                <div>
                    <p>Displaying {firstItem} to {lastItem} of {this.state.numItems} items.</p>
                    {content}
                    {(this.state.pageNum == 1) ? null : <button onClick={this.previousPage}>Previous Page</button>}
                    {(this.state.pageNum == this.state.numPages) ? null : < button onClick={this.nextPage}>Next Page</button>}
                </div>

            );
        }
    }
}

export default Appointments;