import React, { useState } from "react";
import { Button, Popover } from "@xola/ui-kit";
import { QueryClient, QueryClientProvider } from "react-query";
import { TravelerListPage } from "./Components/TravelerListPage";

const queryClient = new QueryClient();

export const App = () => {
    const [showTravelers, setshowTravelers] = useState(true);

    const handleButtonClick = () => {
        setshowTravelers(!showTravelers);
    };

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Popover
                    content={
                        <Popover.Content>
                            <div>This is my popOver</div>
                        </Popover.Content>
                    }
                    placement="right"
                    trigger="mouseenter"
                >
                    <Button onClick={handleButtonClick}>Click Me!</Button>
                </Popover>
                {showTravelers == true ? <TravelerListPage></TravelerListPage> : null}
            </div>
        </QueryClientProvider>
    );
};
