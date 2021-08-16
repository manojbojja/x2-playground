import React from "react";
import { TravelerList } from "./TravelerList";
import { FormGroup, Input, Label, Switch } from "@xola/ui-kit";
import { useDebounce } from "use-debounce";
import { useTravelerStore } from "../Stores/TravelersStore";

export const TravelerListPage = () => {
    const search = useTravelerStore((state) => state.search);
    const setSearch = useTravelerStore((state) => state.setSearch);

    const type = useTravelerStore((state) => state.type);
    const toggleType = useTravelerStore((state) => state.toggleType);

    const [value] = useDebounce(search, 1000);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <Switch onChange={toggleType} size="medium" isChecked={type == 1} />
            <FormGroup>
                <Label>Search</Label>
                <Input value={search} onChange={handleSearchChange} />
            </FormGroup>
            <TravelerList search={value} type={type}></TravelerList>
        </div>
    );
};
