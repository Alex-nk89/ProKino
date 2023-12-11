import { PropsWithChildren } from "react";
import { File } from "../../../domains/common";

export interface ModallGalleryProps extends PropsWithChildren {
  galleryList: File[];
  startIndex?: number;
  opened: boolean;
  onClose: () => void;
}
