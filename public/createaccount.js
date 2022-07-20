const e = require("express");

function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow}/> :
        <CreateMsg setShow={setShow}/> }
      />
  )
}

function CreateMsg(props){
  return(<>
  <h5>Success</h5>
  <button type="submit"
  className="btn btn-light"
  onClick={() => props.setShow(true)}>Add Another Account</button>
  </>);
}

function CreateForm(props){
  const [name, setName]       = React.useState('');
  const [email, setEmail]     = React.useState('');
  const [password, setPassword] = React.useState('');

  function handle(){
    console.log(name,email,password);
    const url = `account/create/${name}/${email}/${password}`;
    (async () => {
      var res   = await fetch(url);
      var data  = await res.json();
      console.log(data);
    })();
    props.setShow(false);
  }

  return (<>

    Name<br/>
    <input type="input"
    className="form-control"
    placeholder="Enter Name"
    value={name}
    onChange={e => setName(e.currentTarget.value)} /><br/>

    Email Address<br/>
    <input type="input"
    className="form-control"
    placeholder="Enter Email"
    value={email}
    onChange={e => setEmail(e.currentTarget.value)} /><br/>

    Password<br/>
    <input type="input"
    className="form-control"
    placeholder="Enter Password"
    value={password}
    onChange={e => setPassword(e.currentTarget.value)} /><br/>

    <button type="submit"
    className="btn btn-light"
    onClick={handle}>Create Account</button>
  </>);
}