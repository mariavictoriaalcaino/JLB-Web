import flowLogo from "../assets/payment/flow.png";
import visaMastercard from "../assets/payment/visa.png";
function PaymentMethods() {
  return (
    <section className="payment-methods">
      <div className="payment-header">
        <h2>Medios de pago</h2>
        <p>Elige la alternativa que más te acomode.</p>
      </div>

      <div className="payment-grid">

        <div className="payment-card">
          <div className="payment-icon">🏦</div>
          <h3>Transferencia bancaria</h3>
          <p>Pago mediante transferencia.</p>
        </div>

        <div className="payment-card">
          <div className="payment-icon flow-logo">
  <img src={flowLogo} alt="Flow" />
</div>
          <h3>Link de pago Flow</h3>
          <p>Paga online con tarjetas.</p>
        </div>

        <div className="payment-card">
  <div className="payment-icon card-logos">
    <img src={visaMastercard} alt="Visa y Mastercard" />
  </div>
  <h3>Tarjetas de crédito y débito</h3>
  <p>Pago presencial en nuestro local.</p>
</div>

        <div className="payment-card">
          <div className="payment-icon">💵</div>
          <h3>Efectivo</h3>
          <p>Disponible en nuestro local.</p>
        </div>

      </div>
    </section>
  );
}

export default PaymentMethods;