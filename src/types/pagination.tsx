export interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}