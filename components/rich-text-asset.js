import Image from "next/image";

export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find(asset => asset.sys.id === id);

  if (asset?.url) {
    return <img src={asset.url} layout="fill" alt={asset.description} />;
  }

  return null;
}
