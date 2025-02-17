import React from 'react';
import './OrderForm.css';

function OrderForm({ formData, handleInputChange, handleSubmit }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="voornaam">Voornaam</label><br />
      <input type="text" id="voornaam" name="voornaam" value={formData.voornaam} onChange={handleInputChange} /><br />

      <label htmlFor="achternaam">Achternaam</label><br />
      <input type="text" id="achternaam" name="achternaam" value={formData.achternaam} onChange={handleInputChange} /><br />

      <label htmlFor="leeftijd">Leeftijd</label><br />
      <input type="number" id="leeftijd" name="leeftijd" value={formData.leeftijd} onChange={handleInputChange} /><br />

      <label htmlFor="postcode">Postcode</label><br />
      <input type="text" id="postcode" name="postcode" value={formData.postcode} onChange={handleInputChange} /><br />

      <label htmlFor="frequency">Hoe vaak wil je bestellen?</label><br />
      <select id="frequency" name="frequency" value={formData.frequency} onChange={handleInputChange}>
        <option value="weekly">Iedere week</option>
        <option value="biweekly">Om de week</option>
        <option value="monthly">Iedere maand</option>
      </select><br />

      <div className="radio-group">
        <label htmlFor="overdag">
          <input type="radio" id="overdag" name="tijd" value="overdag" checked={formData.tijd === "overdag"} onChange={handleInputChange} />
          Overdag
        </label>
        <label htmlFor="avond">
          <input type="radio" id="avond" name="tijd" value="avond" checked={formData.tijd === "avond"} onChange={handleInputChange} />
          Avonds
        </label>
      </div>

      <label htmlFor="opmerking">Opmerking</label><br />
      <textarea id="opmerking" name="opmerking" rows="4" cols="50" value={formData.opmerking} onChange={handleInputChange}></textarea><br />

      <button type="button" className="verstuur-btn" onClick={handleSubmit}>Verstuur</button>
    </form>
  );
}

export default OrderForm;
