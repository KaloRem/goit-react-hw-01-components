import PropTypes from 'prop-types';

export const Transaction = ({
  transactionType,
  transactionAmount,
  transactionCurrency,
}) => {
  return (
    <tr>
      <td>{transactionType}</td>
      <td>{transactionAmount}</td>
      <td>{transactionCurrency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  transactionType: PropTypes.string.isRequired,
  transactionAmount: PropTypes.string.isRequired,
  transactionCurrency: PropTypes.string.isRequired,
};