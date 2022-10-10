type obj = {
    title: string;
}

export const convertArrToObj = (arr: obj[]) => {
    if (!arr) return {};

    return arr.reduce((acc, obj) => {
        acc[obj.title] = obj;
        return acc;
    }, {} as Record<string, obj>);
}