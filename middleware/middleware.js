const middleware = (req, res, next) => {
    switch (req.method) {
      case 'GET': {
        console.info("A wild GET request appears! Ready to catch 'em all!");
        break;
      }
      case 'POST': {
        console.info("POST request detected! Let's give it a warm digital hug with a 200 OK response.");
        break;
      }
      default:
        console.log("A mysterious request from the digital abyss? Time to decode the binary enigma!");
    }
  
    next();
  };

  exports.middleware = middleware