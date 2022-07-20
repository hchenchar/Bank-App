function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, setBalance]         = React.useState('');
  const [depositAmount, setDepositAmount] = React.useState('');
  const ctx = React.useContext(UserContext); 

  function validate(field){
    if(field<0) {
      setStatus("Error: " + "Cant deposit a negative amount");
      setTimeout(() => {setStatus(''); setDepositAmount('')}, 3000);
      return false;
    }
    if (isNaN(field)) {
      setStatus('Error: ' + "Please enter a valid number");
      setTimeout(() => {setStatus(''); setDepositAmount('')}, 3000);
      return false;
    }
    return true;
  }

  function handleDeposit() {
    if(!validate(depositAmount)) return;
    let current = (balance + depositAmount);
    setBalance(current);
    setShow(false)
  }

  function clearForm() {
    setDepositAmount('');
    setShow(true);
  }
  
  return (
          <Card            
            bgcolor="primary"
            header="Deposit"
            status={status}
            body={show ? (  
                    <>
                    <div className="text-start">
                      <div className="lead mb-2">Balance: ${balance}</div>
                      
                      Deposit Amount:<br/>
                      <input type="input" className="form-control" id="depositAmount" placeholder="Enter value" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)}/><br/>
                    </div>
                    
                    <button type="submit" className={!depositAmount ? "disabled btn btn-info " : "btn btn-info "} onClick={handleDeposit}>Deposit</button>
                    </>
                  ):(
                    <>
                    <h5 className="mb-3">Balance: ${balance}</h5>
                    <p>Total Amount Deposited: ${depositAmount}</p>
                    <button type="submit" className="btn btn-info" onClick={clearForm}>Submit New Deposit</button>
                    </>
                  )}
          />
  );
}
