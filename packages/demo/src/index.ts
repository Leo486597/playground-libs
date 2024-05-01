type IDemo = {
    name: string;
    output: () => { hi: string; ho: string };
};

const getDemo: (name: string) => IDemo = (name) => {
    return {
        name,
        output() {
            return {
                hi: "hi",
                ho: "ho" + name,
            };
        },
    };
};
export { getDemo, type IDemo };
