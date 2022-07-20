function Withdraw(){
  const [show, setShow]                   = React.useState(true);
  const [status, setStatus]               = React.useState('');
  const [balance, setBalance]             = React.useState('');
  const [withdrawAmount, setWithdrawAmount] = React.useState('');
  const ctx = React.useContext(UserContext);

  function validate(field) { 
    if (isNaN(field)) {
      setStatus('Error: Please enter a valid number');
      setTimeout(() => { setStatus(''); setWithdrawAmount('')}, 3000);
      return false;
    }
    return true;
  };

  function handlewithdraw() {
    if (!validate(withdrawAmount)) return;
    let current = ((balance) - (withdrawAmount));
    if (current < 0) {
      setStatus('Error: You cannot withdraw more than your account balance.');
      setTimeout(() => {setStatus(''); setWithdrawAmount('')}, 3000);
      return;
    }
    setBalance(current);
    setShow(false)
  };

  function clearForm() {
    setWithdrawAmount('');
    setShow(true);
  };

  return (
          <Card            
            bgcolor="primary"
            header="Withdraw"
            status={status}
            body={show ? (  
                    <>
                    <div className="text-start">
                      <div className="lead mb-2">Balance: ${balance}</div>
                      
                      Withdraw Amount:<br/>
                      <input type="input" className="form-control" id="withdrawAmount" placeholder="Enter value" value={withdrawAmount} onChange={e => setWithdrawAmount(e.currentTarget.value)}/><br/>
                    </div>
                    
                    <button type="submit" className={!withdrawAmount ? "disabled btn btn-warning " : "btn btn-warning "} onClick={handlewithdraw}>Withdraw</button>
                    </>
                  ):(
                    <>
                    <h5 className="mb-3">Account Balance: ${balance}</h5>
                    <p>Total Amount Withdrawn: ${withdrawAmount}</p>
                    <button type="submit" className="btn btn-info" onClick={clearForm}>Submit New Withdrawal</button>
                    </>
                  )}
          />
  );
}