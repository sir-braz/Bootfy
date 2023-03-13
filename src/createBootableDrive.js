const { exec } = require("child_process");

function createBootableDrive(isoPath, usbDevice) {
  return new Promise((resolve, reject) => {
    exec(`sudo dd if=${isoPath} of=${usbDevice} bs=4M status=progress oflag=sync`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

module.exports = createBootableDrive;
