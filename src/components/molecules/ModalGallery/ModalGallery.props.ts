import { File } from "../../../domains/common";

export interface ModallGalleryProps {
  galleryList: File[];
  startIndex?: number;
  opened: boolean;
  onClose: () => void;
}
