import React from "react";
import BarcodeReader from 'react-barcode-reader'
 
class Scan extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }
  render(){
 
    return(
      <div>
        <BarcodeReader
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <input id="scan-result" type="text" name="scan">{this.state.result}</input>
      </div>
    )
  }
}


 
export default Scan;