import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router";

interface Breadcrumb {
    label: string,
    to: string
}

interface Props {
    currentPage: string;
    breadcrumb?: Breadcrumb[];
}

export const CustomBreadcrumb = ({ currentPage, breadcrumb = [] }: Props) => {
    return (
        <Breadcrumb className="my-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink render={<Link to="/" />}>
                        Inicio
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {
                    breadcrumb.map(crumb => (
                        <div className="flex items-center">
                            <BreadcrumbSeparator />
                            <BreadcrumbLink render={<Link to={crumb.to} />}>
                                {crumb.label}
                            </BreadcrumbLink>
                        </div>
                    ))
                }
                <BreadcrumbSeparator />

                <BreadcrumbItem>
                    <BreadcrumbLink href="#">{currentPage}</BreadcrumbLink>
                </BreadcrumbItem>

            </BreadcrumbList>
        </Breadcrumb>
    )
}
