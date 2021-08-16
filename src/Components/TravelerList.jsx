import React from "react";
import { TravelItem } from "./TravelItem";
import axios from "axios";
import { useQuery } from "react-query";
import { Spinner } from "@xola/ui-kit";

export const TravelerList = ({ search, type }) => {
    const { data, isLoading } = useQuery(["travelers", search, type], async () => {
        const response = await axios.get("https://sandbox1.xola.com/api/users", {
            params: { search: search, type: type },
            headers: { "X-API-KEY": "" },
        });
        return response.data;
    });
    if (isLoading) {
        return <Spinner />;
    }
    return (
        <div>
            {data.data.map((user) => {
                return <TravelItem key={user.id} name={user.name} email={user.email}></TravelItem>;
            })}
        </div>
    );
};
