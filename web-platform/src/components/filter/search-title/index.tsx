import React from "react";
import "./search-title.scss";
import { FormControl } from "react-bootstrap";

const SearchTitle = (props: any) => {
    const { fieldsToSearch, data, setData } = props;
    const [originalData, setOriginalData] = React.useState<any>(data);
    const onChangeHandler = (event: any) => {
        if (event.target.value === '') {
            setData(originalData)
        } else {
            try {
                let searchParms: string = event?.target.value;
                const dataSet: object[] = [];
                for (let i = 0; i < originalData.length; i++) {
                    const element = originalData[i];
                    fieldsToSearch.forEach((fieldName: string) => {
                        let field: string = element[fieldName];
                        field = field.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toUpperCase();
                        searchParms = searchParms.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toUpperCase();
                        if (field.indexOf(searchParms) !== -1) dataSet.push(element);
                    });
                }
                setData(dataSet);
            } catch (e: any) {
                console.log('e', [e]);
            }
        }
        setOriginalData(originalData);
    }
    return <>
        <input onChange={onChangeHandler} type={'text'} placeholder="Search a title here..." className="search" />
    </>
}

export default SearchTitle;