import hexToRgba from "hex-to-rgba";
import styled from "styled-components";
import tags from "./tags.json";

const TagContainer = styled.div`
  margin: 50px 0 5px;
  display: flex;
  align-items: center;
  color: #d9d9d9;
  flex-direction: row;
  gap: 50px;
  justify-content: left;
  font-size: 24px;
`;

/*
const TagButton = styled.button`
  color: white;
  margin-right: 24px;
  transition: border-color 0.3s ease;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
  border-radius: 10px;
  padding: ${(props) => {
    const verticalPadding = `calc(${Number(props.$size)} * 10px)`;
    const horizontalPadding = `calc(${Number(props.$size)} * 8px)`;

    return `${verticalPadding} ${horizontalPadding}`;
  }};
  background-color: ${hexToRgba("#d9d9d9", 0.3)};
  cursor: pointer;
  box-sizing: border-box;
`;
*/

const dynamicTag = (tag) => {
  return styled(tag)`
    color: white;
    margin-right: 24px;
    transition: border-color 0.3s ease;
    border: 2px solid transparent;
    ${() =>
      tag === "button" &&
      `
      &:hover {
        border-color: #c98cf1;
      }
    `}
    border-radius: 10px;

    padding: ${(props) => {
      const verticalPadding = `calc(${Number(props.$size)} * 10px)`;
      const horizontalPadding = `calc(${Number(props.$size)} * 8px)`;
      return `${verticalPadding} ${horizontalPadding}`;
    }};

    background-color: ${hexToRgba("#d9d9d9", 0.3)};

    cursor: ${() => {
      return tag === "button" ? "pointer" : "default";
    }};

    box-sizing: border-box;
  `;
};

const Tags = ({ size = 1, type = "button", onFilterImages }) => {
  const Tag = dynamicTag(type);

  return (
    <TagContainer>
      <p>Search for tags:</p>
      <div>
        {/*
          {tags.map((tag) => (
            <TagButton $size={size} key={tag.id}>
              {tag.title}
            </TagButton>
          ))}
        */}
        {tags.map((tag) => (
          <Tag $size={size} key={tag.id} onClick={() => onFilterImages(tag.id)}>
            {tag.title}
          </Tag>
        ))}
      </div>
    </TagContainer>
  );
};

const StyledSpan = styled.span`
  display: block;
  position: absolute;
  color: white;
  margin: 10px 10px 0 0;
  right: 0;
  transition: border-color 0.3s ease;
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 5px 4px;
  background-color: ${hexToRgba("#d9d9d9", 0.3)};
  box-sizing: border-box;
`;

export const Tag = ({ imgId, expand }) => {
  return (
    <>
      {expand ? (
        ""
      ) : (
        <StyledSpan>
          {tags.map((tag) => {
            const tagName = tag.title;
            return tag.id === imgId ? tagName : "";
          })}
        </StyledSpan>
      )}
    </>
  );
};

export default Tags;
