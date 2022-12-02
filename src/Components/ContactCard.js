import React from "react";
import { Button, Header, Form } from 'semantic-ui-react'

const ContactCard = () => {
    return (
        <Form>
            <Header>Contact me:</Header>

            <Form.Field>
            <Form.Input label='Name' placeholder='Name' width={8} />
            </Form.Field>

            <Form.Field>
            <Form.Input label='Company' placeholder='Company' width={8} />
            </Form.Field>

            <Form.Field>
            <Form.Input label='Email' placeholder='Email' width={8} />
            </Form.Field>

            <Form.Field>
            <Form.Input label='Phone Number' placeholder='Phone Number' width={8} />
            </Form.Field>

            <Form.TextArea label='Message' placeholder='Message' width={8} />

            <Button type='submit'>Submit</Button>
        </Form>
    )

}

export default ContactCard