import React from "react";

type MyContextData = {
    text: string;
    setText: (text: string) => void;
}

const MyContext = React.createContext<MyContextData>({
    text: '',
    setText: () => {},
});

export default MyContext;