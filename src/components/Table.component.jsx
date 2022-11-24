import { headerTitles } from "../utils/strings";

export function Table({ data, onSelectCustomer }) {
    
    return (
        <div className="table">
            <div className="table_header">
                {headerTitles.map(el => (
                    <label key={el.key}>{ el.name }</label>
                ))}
            </div>
            
            {data && data.map((el, index) =>
                <div className="table_body" key={el.id} onClick={()=>onSelectCustomer(el.id)}>
                    {Object.keys(el).map((key, i) =>
                        <label key={i}>{el[headerTitles[i].key]}</label>
                    )}
                </div>
            )}
        </div>
    )
}