import css from './CarInfoSections.module.css';

export default function CarInfoSections({ car }) {
  return (
    <div className={css.infoSections}>
      <div className={css.section}>
        <h3>Rental Conditions:</h3>
        <ul>
          {car.rentalConditions?.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div className={css.section}>
        <h3>Car Specifications:</h3>
        <ul>
          <li>Year: {car.yea}</li>
          <li>Type: {car.type}</li>
          <li>Fuel Consumption: {car.fuelConsumption}</li>
          <li>Engine Size: {car.engineSize}</li>
        </ul>
      </div>

      <div className={css.section}>
        <h3>Accessories and functionalities:</h3>
        <ul>
          {[...(car.accessories || []), ...(car.functionalities || [])].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
