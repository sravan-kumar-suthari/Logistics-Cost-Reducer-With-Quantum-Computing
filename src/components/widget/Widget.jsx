import "./widget.scss";
const Widget = ({ type }) => {
  let data;
switch (type) {
    case "user":
        data = {
            title: "Shipment",
            isMoney: false,
        };
        break;
        case "order":
            data = {
                title: "Vehicals",
                isMoney: false,
            };
            break;
            case "earning":
                data = {
                    title: "Demands",
                    isMoney: true,
                };
                break;
            case "earn":
                data = {
                    title: "Transport Cost",
                    isMoney: true,
                };
                break;
                case "balance":
                    data = {
                        title: "Substainablity Indicator",
                        isMoney: true,
                    };
                    break;
               default:
                    break;
}

  return (
    <div className="widget">
      <div className="left">
            <span className="title">{data.title}</span>
            {/* <span className="counter">{data.isMoney} {amount}</span> */}
            {/* <span className="link">{data.link}</span> */}
      </div>
    </div>
  );

}

export default Widget
