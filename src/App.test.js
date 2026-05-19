import { render, screen } from "@testing-library/react"
import App from "./App"
import { expect } from "vitest"
import "@testing-library/jest-dom"

it("Should render the Heading",()=>{
    render(<App />)

    expect(screen.getByText("Get started, Hello")).toBeInTheDocument()
})

it("should render the no. of headings", ()=>{
    render(<App/>);
    
    const items = screen.getAllByRole("heading");

    expect(items.length).toBe(2);
})