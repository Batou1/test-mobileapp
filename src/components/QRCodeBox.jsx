import { QRCodeSVG } from "qrcode.react";

export default function QRCodeBox({ value }) {
  return (
    <div className="flex justify-center mt-6">
      <QRCodeSVG value={value} size={180} />
    </div>
  );
}

