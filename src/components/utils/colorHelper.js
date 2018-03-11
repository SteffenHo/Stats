

export const getStatsColor = (x) => {
    switch(x){
        case 0 :
            return chayns.getSchemeColor(100);
        case 1 :
            return chayns.getSchemeColor(70);
        case 2:
            return chayns.getSchemeColor(50);
        case 3: 
            return chayns.getSchemeColor(30);
        case 4: 
            return chayns.getSchemeColor(10);
    }
}

export const statsColor = (inColor, data) => {
    console.log(data)
        return getStatsColor(data.index || 0);
}