import os

def readFile(filename: str):
    with open(filename, "r") as file:
        return file.read()

def writeFile(filename: str, content: str):
    with open(filename, "w") as file:
        file.write(content)

def getLocation(content: str):
    start = 0
    allAttributeValue = []
    indexOfInnerHTMLLocation = []

    find = 0

    while True:
        find = content.find("w3-include-html", start)
        if find == -1: break

        INDEX = find
        attributeValueStart = False
        attributeValueEnd = False
        attributeValue = False
        innerHTML = False

        index = INDEX
        while True:
            if attributeValue == False:

                if attributeValueStart == False:
                    if content[index] == '"':
                        attributeValueStart = index+1

                else:
                    if content[index] == '"':
                        attributeValueEnd = index

                        attributeValue = content[attributeValueStart:attributeValueEnd]

            elif innerHTML == False:
                if content[index] == ">":
                    innerHTML = index + 1

            else:
                allAttributeValue.append(attributeValue)
                indexOfInnerHTMLLocation.append(innerHTML)

                start = index
                break

            index+=1

    return {
        "attributeValue": allAttributeValue,
        "innerHTMLLocation": indexOfInnerHTMLLocation,
        "length": len(allAttributeValue)
    }

def stringInsert(string: str, index: int, stringInput: str):
    return string[0:index] + stringInput + string[index:]

def getTab(count: int):
    return "    " * count

def HTMLCompile(content: str, location: dict[str, list[str] | list[int] | int]):
    indexPlus = 0
    for index in range(location["length"]):
        attributeValue = location["attributeValue"][index]
        innerHTMLLocation = location["innerHTMLLocation"][index] + indexPlus
        HTMLContent = readFile(attributeValue)

        startLine = "\n" + getTab(2)
        endLine = "\n" + getTab(1)
        HTMLContent = HTMLContent.replace("\n", startLine)

        HTMLContent = startLine + HTMLContent + endLine

        content = stringInsert(content, innerHTMLLocation, HTMLContent)

        indexPlus += len(HTMLContent)

    return content

def HTMLRemove(content: str):
    removeContent = """\n    <script src="include.js"></script>"""
    content = content.replace(removeContent, "")

    return content

def main():
    content = readFile("index.html")
    location = getLocation(content)

    content = HTMLCompile(content, location)
    content = HTMLRemove(content)

    content = (
"""<!--
    This code was compiled to be can run in non-server.
    Compiled by Python program that is created by Azhar.
-->
\n"""
    +content
    )

    if not os.path.isdir("bin"):
        os.makedirs("bin")
    writeFile("bin/index.html", content)

    input("END (Press Enter to Close)")

if __name__ == "__main__":
    main()