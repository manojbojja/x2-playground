import React from 'react'
import { Avatar, Badge, Phone } from "@xola/ui-kit";

export const TravelItem = ({ name, email }) => {

    return (
        <div className="flex space-x-4 items-center">
            <Avatar
                color="bg-primary-lighter"
                name={name}
                size="large"
            />
            <Badge
                color="primary"
                size="small"
            >
                {email}
            </Badge>
            <h1>{name}</h1>
        </div>
    )
}
