import numeraljs from "../../node_modules/numeral/numeral";

let Helper = {
  // 1000 => 1k
  shortNum(n){
    return numeraljs(n).format("0.00a");
  }
};

export default Helper;