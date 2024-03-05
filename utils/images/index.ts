import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
}

const allImages: CustomImage[] = [
  {
    src: "l3zbqfwxqo7hkzrsr9i0",
    original: "l3zbqfwxqo7hkzrsr9i0",
    width: 320,
    height: 212,
    caption: "SRHR",
  },

  {
    src: "wh3pzwpxzzqynzrovhvj",
    original: "wh3pzwpxzzqynzrovhvj",
    width: 320,
    height: 212,
    caption: "SRHR",
  },
  {
    src: "ilxeow1tszyiceuut9y7",
    original: "ilxeow1tszyiceuut9y7",
    width: 320,
    height: 212,
    caption: "SRHR",
  },
  {
    src: `zclbfughdy0zmvmai8pv`,
    original: `zclbfughdy0zmvmai8pv`,
    width: 320,
    height: 212,
    caption: "SRHR",
  },

  {
    src: `bu1xz3maooyeeu9qquzi`,
    original: `bu1xz3maooyeeu9qquzi`,
    width: 320,
    height: 212,
    caption: "SRHR",
  },
  {
    src: `giqwd9sabuyfy6meua6m`,
    original: `giqwd9sabuyfy6meua6m`,
    width: 320,
    height: 212,
    caption: "SRHR",
  },
  {
    src: `gbcstniwwb9ubftlqrbz`,
    original: `gbcstniwwb9ubftlqrbz`,
    width: 320,
    height: 212,
    caption: "SRHR",
  },
  {
    src: `uvcu29ik8xswsyi7gl8a`,
    original: `uvcu29ik8xswsyi7gl8a`,
    width: 320,
    height: 212,
    caption: "SRHR",
  },
  {
    src: `ee5bbujnpbbbgss3d8by`,
    original: `ee5bbujnpbbbgss3d8by`,
    width: 320,
    height: 212,
    caption: "SRHR",
  },
  {
    src: `kbxlopndqpsi4c0txfgy`,
    original: `kbxlopndqpsi4c0txfgy`,
    width: 320,
    height: 212,
    caption: "SRHR",
  },
  {
    src: `xq7nfui6zbpzku1ttsiy`,
    original: `xq7nfui6zbpzku1ttsiy`,
    width: 320,
    height: 212,
    caption: "SRHR",
  },
  {
    src: `djfdhmmp3qxcefjaoidj`,
    original: `djfdhmmp3qxcefjaoidj`,
    width: 320,
    height: 212,
    caption: "SRHR",
  },
  {
    src: `lbxljeedhghnpvrsxvn7`,
    original: `lbxljeedhghnpvrsxvn7`,
    width: 320,
    height: 212,
    caption: "SRHR",
  },
  {
    src: `pjmmklcizufsfb1wtysk`,
    original: `pjmmklcizufsfb1wtysk`,
    width: 320,
    height: 212,
    caption: "SRHR",
  },
  {
    src: `atneawyim9zj2jdmoltn`,
    original: `atneawyim9zj2jdmoltn`,
    width: 320,
    height: 212,
    caption: "SRHR",
  },
  {
    src: `vbwyqr9eo6qtr4nsgtek`,
    original: `vbwyqr9eo6qtr4nsgtek`,
    width: 320,
    height: 212,
    caption: "SRHR",
  },
  {
    src: `wgcnvfmst8xmnfr5ott7`,
    original: `wgcnvfmst8xmnfr5ott7`,
    width: 320,
    height: 212,
    caption: "SRHR",
  },
  {
    src: `tvgkl1vajzbiveetixsb`,
    original: `tvgkl1vajzbiveetixsb`,
    width: 320,
    height: 212,
    caption: "SRHR",
  },
  {
    src: `agjsoaatrjhl9fkdrejd`,
    original: `agjsoaatrjhl9fkdrejd`,
    width: 320,
    height: 212,
    caption: "SRHR",
  },
];

export const images = allImages.map((image) => ({
  ...image,
  src: `https://res.cloudinary.com/duzmcqimi/image/upload/c_scale,w_720/v1709632388/srhr/${image.src}.webp`,
  original: `https://res.cloudinary.com/duzmcqimi/image/upload/c_scale,w_1080/v1709632388/srhr/${image.original}.webp`,
}));
