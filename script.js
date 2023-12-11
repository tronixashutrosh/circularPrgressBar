  getBorderStyle(index, deg) {
    let style = {};
    switch (index) {
      case 0:
        style = `conic-gradient(#3498db ${deg}deg, #F5F1FD 0deg)`;
        break;
      case 1:
        style = `conic-gradient(#45C49C ${deg}deg, #ECF8F5 0deg)`;
        break;
      case 2:
        style = `conic-gradient(#FC5A5A ${deg}deg, #FFF5ED 0deg)`;
        break;
      case 3:
        style = `conic-gradient(#057CC3 ${deg}deg, #E6F2F9 0deg)`;
        break;
      case 4:
        style = `conic-gradient(#FCA600 ${deg}deg, #FFF6E6 0deg)`;
        break;
      case 5:
        style = `conic-gradient(#3498db ${deg}deg, #FFF5ED 0deg)`;
        break;
      default:
        style = `conic-gradient(#FFF5ED ${deg}deg, #F5F1FD 0deg)`;
    }

    return { background: style };
  }
