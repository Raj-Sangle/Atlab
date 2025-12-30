# CTA Text Styling Update - "Let us build your school's future together."

## ✅ COMPLETED SUCCESSFULLY

Updated the styling for the text "Let us build your school's future together." according to your specifications.

## 🎯 Changes Made

### Font Family & Base Size
- **Font Family**: Changed from `'Poppins', sans-serif` to `'Raleway', sans-serif`
- **Base Font Size**: Changed from `40px` to `32px` (for screens 1024px and larger)

### Responsive Font Size
- **Screens ≥ 1024px**: `32px` font size
- **Screens < 1024px**: `28px` font size

## 📁 Files Modified

### 1. `assets/css/style.css`
```css
.k12-cta-content h2 {
    font-family: 'Raleway', sans-serif;
    font-size: 32px;
    /* ... other properties remain unchanged */
}
```

### 2. `assets/css/responsive.css`
Updated all responsive breakpoints to include the Raleway font family:

- **@media (max-width: 1024px)**: `28px` font size + Raleway font
- **@media (max-width: 768px)**: `28px` font size + Raleway font  
- **@media (max-width: 900px)**: `26px` font size + Raleway font
- **@media (max-width: 480px)**: `22px` font size + Raleway font
- **@media (max-width: 320px)**: `20px` font size + Raleway font

## 🎨 Final Result

The text "Let us build your school's future together." now displays with:

✅ **Raleway, sans-serif** font family on all screen sizes
✅ **32px** font size on screens 1024px and larger  
✅ **28px** font size on screens smaller than 1024px
✅ Consistent styling across all responsive breakpoints

## 📍 Location

The text appears in both:
- `index.html` (line ~925)
- `k-12_landing/k12.html` (line ~893)

Both files will now display the updated styling automatically.

---

**Status**: ✅ **COMPLETED** - Text styling updated successfully with Raleway font family and responsive font sizes as requested.