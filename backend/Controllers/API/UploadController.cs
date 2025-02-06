using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers.API;

[ApiController]
[Route("api/[controller]")]
public partial class UploadController(IWebHostEnvironment environment) : Controller
{
    [HttpPost]
    public IActionResult Single(IFormFile? file)
    {
        try
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file uploaded.");
            }

            var fileName = $"uploads/{Guid.NewGuid()}{Path.GetExtension(file.FileName)}";

            // Use SaveFile to handle file saving
            SaveFile(file, fileName);

            var url = Url.Content($"/{fileName}");
            return Ok(new { Url = url });
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    [HttpPost("bulk")]
    public IActionResult Multiple(IFormFile[]? files)
    {
        try
        {
            if (files == null || files.Length == 0)
            {
                return BadRequest("No files uploaded.");
            }

            var fileUrls = new List<string>();
            foreach (var file in files)
            {
                var fileName = $"uploads/{Guid.NewGuid()}{Path.GetExtension(file.FileName)}";
                SaveFile(file, fileName);
                fileUrls.Add(Url.Content($"/{fileName}"));
            }

            return Ok(new { Urls = fileUrls });
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    [HttpDelete("delete/{**key}")]
    public IActionResult Delete(string key)
    {
        try
        {
            if (string.IsNullOrEmpty(key))
            {
                return BadRequest("File name is required.");
            }

            key = key.Replace("/", "\\");
            var filePath = Path.Combine(environment.WebRootPath, key);
            if (!System.IO.File.Exists(filePath)) return NotFound();
            System.IO.File.Delete(filePath);
            return Ok();

        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }


    private void SaveFile(IFormFile file, string fileName)
    {
        var fullFileName = Path.Combine(environment.WebRootPath, fileName);
        if (System.IO.File.Exists(fullFileName))
        {
            throw new Exception("File already exists.");
        }

        var directory = Path.GetDirectoryName(fullFileName);
        if (!Directory.Exists(directory))
        {
            Directory.CreateDirectory(directory!);
        }

        using var stream = new FileStream(Path.Combine(environment.WebRootPath, fileName), FileMode.Create);
        file.CopyTo(stream);
    }
}